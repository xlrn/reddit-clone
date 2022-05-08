import TopGrowing from "./topgrowing";
import TrendingCommunities from "./trendingcommmunities";

function SideBarRight() {
    return (
        <div className="col-2 ms-5">
            <TopGrowing></TopGrowing>
            <TrendingCommunities></TrendingCommunities>
        </div>
    )
}

export default SideBarRight;