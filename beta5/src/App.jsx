import * as React from "react";
import * as braze from "@braze/web-sdk";
import logo from "./logo.svg";
import "./App.css";

braze.initialize("FAKE_API_KEY", {
  enableLogging: false,
  baseUrl: "",
  doNotLoadFontAwesome: true,
  sessionTimeoutInSeconds: 1800,
  allowUserSuppliedJavascript: true,
});

function App() {
  React.useEffect(() => {
    braze.changeUser("1345");
    const brazeUser = braze.getUser();
    brazeUser?.setCustomUserAttribute("current_app", "app");
    braze.automaticallyShowInAppMessages();
    braze.openSession();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
