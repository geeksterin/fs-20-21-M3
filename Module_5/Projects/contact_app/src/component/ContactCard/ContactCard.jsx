import { useDispatch } from "react-redux";
import userProfilePic from "../../assets/images/userprofile.jpg"
import { setEditContactId } from "../../slices/contactsSlice";

const ContactCard = (props) => {
    // console.log(props)
    const dispatch = useDispatch();

    const onEditContact = () => {
        dispatch(setEditContactId(props.mobile))
    };

    return (
        <tr>
            <td>
                <img style={{
                    width: "50px",
                    height: "50px"
                }} src={userProfilePic} alt="Default Profile Pic" />
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.surname}
            </td>
            <td>
                {props.mobile}
            </td>
            <td>
                <button onClick={onEditContact}>Edit</button>
                Delte, Fav
            </td>
        </tr>
    )
};

export default ContactCard;