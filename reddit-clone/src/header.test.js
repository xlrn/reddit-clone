import renderer from 'react-test-renderer';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';

it ('renders properly', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Header></Header>
        </MemoryRouter>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})