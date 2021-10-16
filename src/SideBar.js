import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Add from '@mui/icons-material/Add';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideBarChannel from "./SidebarChannel";
import './style/SideBar.css'
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

const SideBar = () => {
	const [showResults, setShowResults] = React.useState(true)

	const onClick = () => setShowResults(!showResults)
	return(
		<div className="sidebar">
		<div className="profile">
		<div className="profileInformation">
			<AccountCircleIcon className="avatar"/>
			<div className="profile_information">
				<h3>zaezf</h3>
				<p>zaezf</p>
			</div>
		</div>
		<Logout className="logout"></Logout>
   </div>
			<div className="scrollView">
				<div className="sidebar_channels_title">
					<div className="sidebar_content_header">
						<div className="sidebar_channels_header" onClick={onClick}>
							<ExpandMoreIcon></ExpandMoreIcon>
							<h4 className="textChannels">{i18n.t('textChannels')}</h4>
						</div>
				</div>
					{ showResults ? 
						<div className="channels_list">
							<SideBarChannel></SideBarChannel>
							<SideBarChannel></SideBarChannel>
							<SideBarChannel></SideBarChannel>
							<SideBarChannel></SideBarChannel>
							<SideBarChannel></SideBarChannel>
						</div>
						: null 
					}

				</div>
				<div>
					<h4>zaezfr</h4>
	
					<h4>zaezfr</h4>
				</div>
			</div>
			<div className="sidebar_top">
			<h3>M'enFou</h3>
			<ExpandMoreIcon></ExpandMoreIcon>
		</div>

		</div>
	)
}

export default SideBar;