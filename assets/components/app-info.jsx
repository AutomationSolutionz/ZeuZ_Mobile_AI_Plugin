import pkg from '../../package.json';
import './app-info.less';

export default () => (
  <div className="app-info">
    <span>v1.2</span>
    <span>
      &copy; 2020-{ (new Date).getFullYear() } <a href="https://zeuz.ai" target="_blank">ZeuZ</a>
    </span>
    <strong>
      <a className="fn-right" target="_blank" style={{color: '#f60'}} href="https://www.zeuz.ai/request-a-live-demo/">
        Need help?
      </a>
    </strong>
  </div>
);
