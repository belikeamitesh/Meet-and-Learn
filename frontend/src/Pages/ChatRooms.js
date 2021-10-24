import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import "../CSS/chatrooms.css";

function ChatRooms() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	auth.onAuthStateChanged((authUser) => {
	// 		if (authUser) {
	// 			//userloggedin
	// 			dispatch(
	// 				login({
	// 					uid: authUser.uid,
	// 					photo: authUser.photoURL,
	// 					email: authUser.email,
	// 					displayName: authUser.displayName,
	// 				})
	// 			);
	// 		} else {
	// 			//userloggedout
	// 			dispatch(logout());
	// 		}
	// 	});
	// }, [dispatch]);
	return (
		//Bem naming convention
		<div className='chatrooms'>
			<Sidebar />
			<Chat />
		</div>
	);
}

export default ChatRooms;
