// We import all dependencies and packages from enzyme and enzyme-to-json.

// We previously had to install with npm.

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));