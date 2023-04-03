import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../redux/actions";
import { useEffect } from "react";
import { cleanDetail } from "../redux/actions";

const Detail = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {name, email, username, phone, website} = useSelector((state) => state.userDetail);

    useEffect(() => {
        dispatch(getUserDetail(id));

        return () => {
            dispatch(cleanDetail());
        }
        
    }, []);

      



    const user = useDispatch((state) => state.userDetail);
    return (
        <div>
        <h1>Este es el Detail</h1>
        <p> {name}</p>
        <p>{email}</p>
        <p> {username}</p>
        <p>{phone}</p>
        <p>{website}</p>
        </div>
    );
    }

export default Detail;