import './app.css'
import App from './App.svelte'
import {ApiFactory} from "./util/apiFactory";

/*set api base url*/
ApiFactory.baseUrl.set('https://api.typo.rip');

/*init app*/
const app = new App({
  target: document.getElementById('app')!,
});

export default app;
