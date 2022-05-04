import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Card from './card';

const test_data = require('./test_data.json');

it ('renders properly', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Card data={test_data.data}></Card>
        </MemoryRouter>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

