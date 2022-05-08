import Favourites from "./favourites";
import MyCommunities from "./mycommunities";
import NavMenu from "./navmenu";

function SideBarLeft() {
    return (
        <div className="col-2">
            <NavMenu></NavMenu>
            <Favourites></Favourites>
            <MyCommunities></MyCommunities>
        </div>
    )
}

export default SideBarLeft;