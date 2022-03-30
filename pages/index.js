import { getFeaturedEvents } from "./dummy-data"
import EventList from "./components/events/event-list"
import EventsSearch from './components/events/events-search'
import { Fragment } from "react/cjs/react.production.min";
import { useRouter } from "next/router";
import Head from "next/head"

const HomePage = () => {
const featuredEvents = getFeaturedEvents();

const router = useRouter();

const findEventsHandler= (year, month)=>{
  const fullPath = `/events/${year}/${month}`;

  router.push(fullPath);
}

  return (
    <Fragment>
    <Head>
      <title>NextEventsApp</title>
    </Head>
      <EventsSearch fake="hi" onSearch={findEventsHandler}  />
      <EventList items={featuredEvents} />
    </Fragment>
  )
}

export default HomePage