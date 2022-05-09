import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Card from './card';

describe('card', () => {
    let test_data;

    beforeEach(() => {
        const json_data = require('./test_data.json');
        test_data = structuredClone(json_data);
    })
    
    it ('renders properly', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Card data={test_data.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it ('renders no text as empty', () => {
        let noTextData = test_data;
        noTextData.data.selftext = "";

        const component = renderer.create(
            <MemoryRouter>
                <Card data={test_data.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it ('renders no subreddit as empty/undefined', () => {
        let noSubredditData = test_data;
        noSubredditData.data.subreddit_name_prefixed = "";

        const component = renderer.create(
            <MemoryRouter>
                <Card data={test_data.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it ('renders falsey title as [deleted]', () => {
        let noTitleTestData = test_data;
        noTitleTestData.data.title = "";
    
        const component = renderer.create(
            <MemoryRouter>
                <Card data={noTitleTestData.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it ('renders falsey user as u/deleted', () => {
        let noUserTestData = test_data;
        noUserTestData.data.author = "";
    
        const component = renderer.create(
            <MemoryRouter>
                <Card data={noUserTestData.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it ('shortens >= 1000 score to k notation', () => {
        let kScoreTestData = test_data;
        kScoreTestData.data.score = 1000;
    
        const component = renderer.create(
            <MemoryRouter>
                <Card data={kScoreTestData.data}></Card>
            </MemoryRouter>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it ('displays modal when clicked', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Card data={test_data.data}></Card>
            </MemoryRouter>
        )
    
        const cardbody = component.root.findByProps({className: "cardbody"});
    
        renderer.act(() => {
            cardbody.props.onClick();
        });
        
        expect(component.root.findAllByProps({className: "postModal", show: true}).length).toBe(1);
    });
    
    it ('closes modal when close button clicked', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Card data={test_data.data}></Card>
            </MemoryRouter>
        )
    
        const cardbody = component.root.findByProps({className: "cardbody"});
        renderer.act(() => {
            cardbody.props.onClick();
        });
        
        const postModal = component.root.findByProps({className: "postModal"});
        renderer.act(() => {
            postModal.props.onHide();
        })
    
        expect(component.root.findAllByProps({className: "postModal", show: false}).length).toBe(1);
    });
    
    it ('renders ReactPlayer with video flags as true', () => {
        let videoTestData = test_data;
        videoTestData.data.secure_media = {
            "reddit_video":{
               "bitrate_kbps":2400,
               "fallback_url":"https://v.redd.it/tltn3mbxcby81/DASH_720.mp4?source=fallback",
               "height":720,
               "width":1280,
               "scrubber_media_url":"https://v.redd.it/tltn3mbxcby81/DASH_96.mp4",
               "dash_url":"https://v.redd.it/tltn3mbxcby81/DASHPlaylist.mpd?a=1654659322%2CNTAwYTRmZDVjNTE5ZDg4NTZkNTI0ZmU0YTBmOGMxNGZiNTdmZDM0NDc0YjdhMWNhZWU5ODZkYmQwYTZhMTRjYg%3D%3D&amp;v=1&amp;f=sd",
               "duration":49,
               "hls_url":"https://v.redd.it/tltn3mbxcby81/HLSPlaylist.m3u8?a=1654659322%2CMGYwZmRmMGRjNDkzY2NhYTI1NDY5ZWU3ZTk3YWEwYmZiNDUzYTE3ZTQzNTk3YWM3NWIzMzQzNTliODhiZDhhNw%3D%3D&amp;v=1&amp;f=sd",
               "is_gif":false,
               "transcoding_status":"completed"
            }
        }
    
        videoTestData.data.is_video = true;
        videoTestData.data.is_reddit_media_domain = true;
    
        const component = renderer.create(
            <MemoryRouter>
                <Card data={videoTestData.data}></Card>
            </MemoryRouter>
        )
    
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it ('renders images with media flags as true', () => {
        let imageTestData = test_data;

        imageTestData.data.url = "https://i.redd.it/tf5f5284rby81.jpg";
        imageTestData.data.is_reddit_media_domain = true;
    
        const component = renderer.create(
            <MemoryRouter>
                <Card data={imageTestData.data}></Card>
            </MemoryRouter>
        )
    
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
