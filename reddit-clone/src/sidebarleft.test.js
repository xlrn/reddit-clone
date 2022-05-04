import renderer from 'react-test-renderer';
import SideBarLeft from './sidebarleft';

it ('renders properly', () => {
    const component = renderer.create(
        <SideBarLeft/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})