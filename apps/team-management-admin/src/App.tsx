import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MeetList } from "./meet/MeetList";
import { MeetCreate } from "./meet/MeetCreate";
import { MeetEdit } from "./meet/MeetEdit";
import { MeetShow } from "./meet/MeetShow";
import { AthleteList } from "./athlete/AthleteList";
import { AthleteCreate } from "./athlete/AthleteCreate";
import { AthleteEdit } from "./athlete/AthleteEdit";
import { AthleteShow } from "./athlete/AthleteShow";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { SeasonList } from "./season/SeasonList";
import { SeasonCreate } from "./season/SeasonCreate";
import { SeasonEdit } from "./season/SeasonEdit";
import { SeasonShow } from "./season/SeasonShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SeriesList } from "./series/SeriesList";
import { SeriesCreate } from "./series/SeriesCreate";
import { SeriesEdit } from "./series/SeriesEdit";
import { SeriesShow } from "./series/SeriesShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Team Management"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Meet"
          list={MeetList}
          edit={MeetEdit}
          create={MeetCreate}
          show={MeetShow}
        />
        <Resource
          name="Athlete"
          list={AthleteList}
          edit={AthleteEdit}
          create={AthleteCreate}
          show={AthleteShow}
        />
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="Season"
          list={SeasonList}
          edit={SeasonEdit}
          create={SeasonCreate}
          show={SeasonShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Series"
          list={SeriesList}
          edit={SeriesEdit}
          create={SeriesCreate}
          show={SeriesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
