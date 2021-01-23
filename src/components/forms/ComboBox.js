import React from "react";

const keyCodes = Object.freeze({
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  UP: 38,
  DOWN: 40
});

class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.combobox = React.createRef();
    this.input = React.createRef();
    this.listbox = React.createRef();

    this.state = {
      search: '',
      isOpen: false,
      activeIndex: -1,
      currentList: this.props.list,
      currentCount: this.props.list.length
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBlur);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBlur);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen && this.state.activeIndex > -1) {
      this.handleScrollToView(`${this.props.name}-${this.state.currentList[this.state.activeIndex].id}`);
    }
  }

  handleKeyDown = (e) => {
    const key = e.which || e.keyCode;
    switch (key) {
      case keyCodes.DOWN:
        if (this.state.currentCount > 0) {
          const { activeIndex, currentCount, isOpen } = this.state;
          const nextIndex = (!isOpen || activeIndex + 1 >= currentCount ? 0 : activeIndex + 1);
          this.setState({
            isOpen: true,
            activeIndex: nextIndex
          });
        }
        break;
      case keyCodes.UP:
        if (this.state.currentCount > 0) {
          const { activeIndex, currentCount, isOpen } = this.state;
          const prevIndex = (!isOpen || activeIndex <= 0 ? currentCount - 1 : activeIndex - 1);
          this.setState({
            isOpen: true,
            activeIndex: prevIndex
          });
        }
        break;
      case keyCodes.ESC:
        this.setState({
          search: '',
          isOpen: false,
          activeIndex: -1,
          currentList: this.props.list,
          currentCount: this.props.list.length
        });
        break;
      case keyCodes.RETURN:
        if (this.state.activeIndex > -1) {
          this.selectItem(this.state.activeIndex);
          this.input.current.focus();
        }
        break;
      case keyCodes.TAB:
        if (this.state.activeIndex > -1) {
          this.selectItem(this.state.activeIndex);
        } else {
          this.setState({
            isOpen: false
          });
        }
        return;
      default:
        return;
    }
    e.preventDefault();
    e.stopPropagation();
  }

  handleChange = (e) => {
    const newVal = e.target.value;
    const results = this.props.list.filter((item) => {
      return item.name.toLowerCase().includes(newVal.toLowerCase());
    });
    this.setState({
      search: newVal,
      activeIndex: -1,
      currentList: results,
      currentCount: results.length,
      isOpen: (results.length > 0)
    });
    this.props.setItem(null);
  }

  handleToggleButton = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
    this.input.current.focus();
  }

  handleFocus = () => {
    const { search, isOpen, currentCount } = this.state;
    if (search && currentCount > 0) {
      if (!isOpen) {
        this.setState({
          isOpen: true
        });
      }
    }
  }

  handleBlur = (e) => {
    if (!this.combobox.current.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  }

  selectItem = (index) => {
    if (index > -1 && index < this.state.currentCount) {
      this.setState((prevState) => {
        this.props.setItem(prevState.currentList[index]);
        return {
          search: prevState.currentList[index].name,
          isOpen: false,
          activeIndex: -1,
          currentList: [prevState.currentList[index]],
          currentCount: 1,
        };
      });
    }
  }

  handleScrollToView = (id) => {
    this.listbox.current.scrollTop = document.getElementById(id).offsetTop;
  }

  render() {
    const {name, label} = this.props;
    let activeDescendant = false;
    if (this.state.activeIndex > -1) {
      activeDescendant = `${name}-${this.state.currentList[this.state.activeIndex].id}`;
    }
    const filteredList = this.state.currentList.map((item, index) => {
      const activeItem = this.state.activeIndex === index;
      return (
        <li key={item.id} id={`${name}-${item.id}`} role="option" aria-selected={activeItem}
            data-index={index} onClick={() => this.selectItem(index)}>
          {item.name}
        </li>
      );
    });
    return (
      <div ref={this.combobox} className={`form-combobox ${this.state.isOpen ? 'open' : 'close'}`} role="combobox" aria-haspopup="listbox" aria-owns={`${name}-options`} aria-expanded={this.state.isOpen}>
        <label id={`${name}-label`} htmlFor={name} className="form-label">{label}</label>
        <div className="form-combobox-input">
          <input ref={this.input} id={name} type="text" className="form-control" name={name}
                 autoComplete="off" aria-autocomplete="list" aria-controls={`${name}-options`}
                 {...(activeDescendant ? { 'aria-activedescendant': activeDescendant} : '')}
                 value={this.state.search} onChange={this.handleChange} onKeyDown={this.handleKeyDown}
                 onFocus={this.handleFocus}
          />
          <div className="form-combobox-button" role="button" tabIndex="-1" aria-label={`Open ${label} list`}
               onClick={this.handleToggleButton}
          >
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
        <ul ref={this.listbox} id={`${name}-options`} role="listbox" className="form-combobox-list" aria-labelledby={`${name}-label`}>
          {filteredList}
        </ul>
      </div>
    );
  }
}

export default ComboBox;
