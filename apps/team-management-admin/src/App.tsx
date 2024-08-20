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
import { NewsArticleList } from "./newsArticle/NewsArticleList";
import { NewsArticleCreate } from "./newsArticle/NewsArticleCreate";
import { NewsArticleEdit } from "./newsArticle/NewsArticleEdit";
import { NewsArticleShow } from "./newsArticle/NewsArticleShow";
import { SeasonList } from "./season/SeasonList";
import { SeasonCreate } from "./season/SeasonCreate";
import { SeasonEdit } from "./season/SeasonEdit";
import { SeasonShow } from "./season/SeasonShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        authProvider={jwtAuthProvider}
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
          name="NewsArticle"
          list={NewsArticleList}
          edit={NewsArticleEdit}
          create={NewsArticleCreate}
          show={NewsArticleShow}
        />
        <Resource
          name="Season"
          list={SeasonList}
          edit={SeasonEdit}
          create={SeasonCreate}
          show={SeasonShow}
        />
      </Admin>
    </div>
  );
};

export default App;
