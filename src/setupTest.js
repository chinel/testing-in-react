import { configure } from "enzyme";
//is the same as import Enzyme from 'enzyme'; then you use it by calling Enzyme.configure
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
