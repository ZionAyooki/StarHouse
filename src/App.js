import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import HousePage from "./pages/HousePage";
import AgentsRoutes from "./agents/AgentsRoutes";
import moment from "moment";

//Data from JSONs
import SiteDataJSON from "./data/siteData.json";
import CategoriesDataJSON from "./data/categoriesData.json";
import AgentsDataJSON from "./data/agentsData.json";
import HousesDataJSON from "./data/housesData.json";
import SearchDataJSON from "./data/searchData.json";
import MeetingsDataJSON from "./data/meetingsData.json";
import MessagesDataJSON from "./data/messagesData.json";
import IdsCountersJSON from "./data/counters.json";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initState();
  }

  initState = () => {
    const idsCounters = JSON.parse(localStorage.getItem('shCounters')) || IdsCountersJSON;
    const allAgents = JSON.parse(localStorage.getItem('shAgents')) || AgentsDataJSON;
    const allHouses = JSON.parse(localStorage.getItem('shHouses')) || HousesDataJSON;
    const allMeetings = JSON.parse(localStorage.getItem('shMeetings')) || MeetingsDataJSON;
    const allMessages = JSON.parse(localStorage.getItem('shMessages')) || MessagesDataJSON;
    const siteData = JSON.parse(localStorage.getItem('shSiteData')) || SiteDataJSON;
    const categories = JSON.parse(localStorage.getItem('shCategories')) || CategoriesDataJSON;
    const search = JSON.parse(localStorage.getItem('shSearch')) || SearchDataJSON;
    const activeUser = JSON.parse(localStorage.getItem('shActiveUser')) || null;//allAgents[0]

    return {
      siteData: siteData,
      idsCounters: idsCounters,
      allAgents: allAgents,
      allHouses: allHouses,
      allMeetings: allMeetings,
      allMessages: allMessages,
      categories: categories,
      search: search,
      activeUser: activeUser
    };
  }

  // Ids Counters
  getNewId = (key) => {
    const newId = this.state.idsCounters[key];
    this.setState((prevState) => {
      const newCounters = {
        ...prevState.idsCounters,
        [key]: prevState.idsCounters[key] + 1,
        random: prevState.idsCounters.random + 1
      };
      localStorage.setItem('shCounters', JSON.stringify(newCounters));
      return { idsCounters: newCounters }
    });
    return newId;
  }

  // Agents manipulation
  agentLogin = (email, pass) => {
    const agentObj = this.getAgentByEmail(email);
    if (agentObj) {
      this.setState(() => {
        localStorage.setItem('shActiveUser', JSON.stringify(agentObj));
        return { activeUser: agentObj }
      });
      window.location = "/#/agents/dashboard";
    }
  }
  agentLogout = () => {
    this.setState(() => {
      localStorage.removeItem('shActiveUser');
      return { activeUser: null }
    });
  }
  isValidLogin = (email, pass) => {
    const agentObj = this.getAgentByEmail(email);
    if (agentObj) {
      return agentObj.password === pass;
    }
    return false;
  }
  agentAdd = (agentObj) => {
    this.setState((prevState) => {
      const newAllAgents = [...prevState.allAgents, agentObj];
      localStorage.setItem('shAgents', JSON.stringify(newAllAgents));
      return { allAgents: newAllAgents };
    });
  }
  getAgentById = (agentId) => {
    agentId = parseInt(agentId);
    return this.state.allAgents.find(agent => agent.id === agentId);
  }
  getAgentByEmail = (email) => {
    return this.state.allAgents.find(agent => agent.email === email);
  }

  // Houses manipulation
  houseAdd = (houseObj) => {
    this.setState((prevState) => {
      const newAllHouses = [...prevState.allHouses, houseObj];
      localStorage.setItem('shHouses', JSON.stringify(newAllHouses));
      return { allHouses: newAllHouses };
    });
  }
  houseRemove = (houseId) => {
    houseId = parseInt(houseId);
    this.setState((prevState) => {
      const newAllHouses = prevState.allHouses.filter(house => house.id !== houseId);
      localStorage.setItem('shHouses', JSON.stringify(newAllHouses));
      return { allHouses: newAllHouses };
    });
  }
  houseEdit = (houseId, houseObj) => {
    houseId = parseInt(houseId);
    this.setState((prevState) => {
      const newAllHouses = prevState.allHouses.map(house => house.id === houseId ? {...house, ...houseObj} : house);
      localStorage.setItem('shHouses', JSON.stringify(newAllHouses));
      return { allHouses: newAllHouses };
    });
  }
  toggleDeal = (houseId) => {
    houseId = parseInt(houseId);
    this.setState((prevState) => {
      const newAllHouses = prevState.allHouses.map(house => house.id === houseId ? {...house, closedAt: house.closedAt ? null : moment().format('YYYY-MM-DD')} : house);
      localStorage.setItem('shHouses', JSON.stringify(newAllHouses));
      return { allHouses: newAllHouses };
    });
  }
  getHouse = (houseId) => {
    houseId = parseInt(houseId);
    return this.state.allHouses.find(house => house.id === houseId);
  }

  // Meetings manipulation
  meetingAdd = (meetingObj) => {
    this.setState((prevState) => {
      const newAllMeetings = [...prevState.allMeetings, meetingObj];
      localStorage.setItem('shMeetings', JSON.stringify(newAllMeetings));
      return { allMeetings: newAllMeetings };
    });
  }
  meetingRemove = (meetingId) => {
    meetingId = parseInt(meetingId);
    this.setState((prevState) => {
      const newAllMeetings = prevState.allMeetings.filter(meeting => meeting.id !== meetingId);
      localStorage.setItem('shMeetings', JSON.stringify(newAllMeetings));
      return { allMeetings: newAllMeetings };
    });
  }
  meetingEdit = (meetingId, meetingObj) => {
    meetingId = parseInt(meetingId);
    this.setState((prevState) => {
      const newAllMeetings = prevState.allMeetings.map(meeting => meeting.id === meetingId ? {...meeting, ...meetingObj} : meeting);
      localStorage.setItem('shMeetings', JSON.stringify(newAllMeetings));
      return { allMeetings: newAllMeetings };
    });
  }
  getMeeting = (meetingId) => {
    meetingId = parseInt(meetingId);
    return this.state.allMeetings.find(meeting => meeting.id === meetingId);
  }

  // Messages manipulation
  messageAdd = (messageObj) => {
    const newId = this.getNewId('message');
    const createdAt = moment().format('YYYY-MM-DD HH:mm');
    const markRead = false;
    this.setState((prevState) => {
      const newAllMessages = [...prevState.allMessages, { ...messageObj, id: newId, createdAt: createdAt, markRead: markRead }];
      localStorage.setItem('shMessages', JSON.stringify(newAllMessages));
      return { allMessages: newAllMessages };
    });
  }
  messageRemove = (messageId) => {
    messageId = parseInt(messageId);
    this.setState((prevState) => {
      const newAllMessages = prevState.allMessages.filter(message => message.id !== messageId);
      localStorage.setItem('shMessages', JSON.stringify(newAllMessages));
      return { allMessages: newAllMessages };
    });
  }
  messageForward = (messageId, agentId) => {
    messageId = parseInt(messageId);
    agentId = parseInt(agentId);
    this.setState((prevState) => {
      const newAllMessages = prevState.allMessages.map(message => message.id === messageId ? {...message, agentId: agentId } : message);
      localStorage.setItem('shMessages', JSON.stringify(newAllMessages));
      return { allMessages: newAllMessages };
    });
  }
  toggleRead = (messageId) => {
    messageId = parseInt(messageId);
    this.setState((prevState) => {
      const newAllMessages = prevState.allMessages.map(message => message.id === messageId ? {...message, markRead: !message.markRead } : message);
      localStorage.setItem('shMessages', JSON.stringify(newAllMessages));
      return { allMessages: newAllMessages };
    });
  }
  getMessage = (messageId) => {
    messageId = parseInt(messageId);
    return this.state.allMessages.find(message => message.id === messageId);
  }

  // Categories
  getCitiesByRegion = (regionId) => {
    regionId = parseInt(regionId);
    if (!regionId) { return this.state.categories.cities; }
    return this.state.categories.cities.filter(city => city.regionId === regionId);
  }
  getRegionByCity = (cityId) => {
    cityId = parseInt(cityId);
    const cityObj = this.state.categories.cities.find(city => city.id === cityId);
    const regionId = cityObj ? cityObj.regionId : 0;
    return this.state.categories.regions.find(region => region.id === regionId);
  }
  getRegionById = (regionId) => {
    return this.state.categories.regions.find(region => region.id === regionId);
  }
  getCityById = (cityId) => {
    return this.state.categories.cities.find(city => city.id === cityId);
  }

  // Search updates
  searchReset = () => {
    this.setState(() => {
      localStorage.removeItem('shSearch');
      return { search: SearchDataJSON }
    });
  }
  searchUpdate = (searchObj) => {
    this.setState(() => {
      localStorage.setItem('shSearch', JSON.stringify(searchObj));
      return { search: searchObj }
    });
  }
  getHousesFiltered = () => {
    const searchObj = this.state.search;
    return this.state.allHouses.filter((house) => {
      if (house.closedAt) { return false; }
      if (house.dealTypeId !== searchObj.dealType) { return false; }
      if (searchObj.regionId && house.regionId !== searchObj.regionId) { return false; }
      if (searchObj.cityId && house.cityId !== searchObj.cityId) { return false; }
      if (searchObj.houseType !== 0 && house.houseTypeId !== searchObj.houseType) { return false; }
      if (searchObj.roomsFrom && house.rooms < searchObj.roomsFrom) { return false; }
      if (searchObj.roomsTo && house.rooms > searchObj.roomsTo) { return false; }
      if (searchObj.floorFrom && house.floor < searchObj.floorFrom) { return false; }
      if (searchObj.floorTo && house.floor > searchObj.floorTo) { return false; }
      if (searchObj.priceFrom && house.price < searchObj.priceFrom) { return false; }
      if (searchObj.priceTo && house.price > searchObj.priceTo) { return false; }
      if (searchObj.additions.parking && !house.additions.includes("Parking")) { return false; }
      if (searchObj.additions.elevator && !house.additions.includes("Elevator")) { return false; }
      if (searchObj.additions.balcony && !house.additions.includes("Balcony")) { return false; }
      if (searchObj.additions.furniture && !house.additions.includes("Furniture")) { return false; }
      if (searchObj.additions.pets && !house.additions.includes("Pets")) { return false; }
      return true;
    });
  }



  render() {
    return (
      <Router>
        <Switch>
          {/*---Agents Section---*/}
          <Route path="/agents">
            <AgentsRoutes
              siteDetails={this.state.siteData.siteDetails} categories={this.state.categories} getNewId={this.getNewId}
              activeUser={this.state.activeUser} handleLogout={this.agentLogout}
              allHouses={this.state.allHouses} houseAdd={this.houseAdd} houseRemove={this.houseRemove} houseEdit={this.houseEdit}
              getHouse={this.getHouse} getCityById={this.getCityById} toggleDeal={this.toggleDeal}
              allMeetings={this.state.allMeetings} meetingAdd={this.meetingAdd} meetingRemove={this.meetingRemove}
              meetingEdit={this.meetingEdit} getMeeting={this.getMeeting}
              allMessages={this.state.allMessages} messageRemove={this.messageRemove} messageForward={this.messageForward}
              toggleRead={this.toggleRead} getMessage={this.getMessage}
            />
          </Route>
          {/*---Public Section---*/}
          <Route path="/">
            <Header siteDetails={this.state.siteData.siteDetails} />
            <Switch>
              <Route exact path="/login">
                <LoginPage activeUser={this.state.activeUser} isValidLogin={this.isValidLogin} handleLogin={this.agentLogin} />
              </Route>
              <Route path="/search/:id">
                <HousePage getHouse={this.getHouse} categories={this.state.categories} getAgent={this.getAgentById} />
              </Route>
              <Route exact path="/search">
                <SearchPage
                  searchState={this.state.search} searchUpdate={this.searchUpdate} getHousesFiltered={this.getHousesFiltered}
                  categories={this.state.categories} getCitiesByRegion={this.getCitiesByRegion}
                  getRegionByCity={this.getRegionByCity} getRegionById={this.getRegionById} getCityById={this.getCityById}
                />
              </Route>
              <Route exact path="/services">
                <ServicesPage services={this.state.siteData.services} />
              </Route>
              <Route exact path="/about">
                <AboutPage allAgents={this.state.allAgents} />
              </Route>
              <Route exact path="/contact">
                <ContactPage allAgents={this.state.allAgents} messageAdd={this.messageAdd} getNewId={this.getNewId} />
              </Route>
              <Route exact path="/">
                <HomePage siteData={this.state.siteData} />
              </Route>
              {/*  Add not found page here */}
            </Switch>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
