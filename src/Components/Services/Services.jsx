//! Services.jsx file for the user
import axios from 'axios';
export let Services = {
    userlogin: async (payload) => {
        let { data } = await axios.get("http://localhost:3001/user",);
        let isAvailable = data.find((val) => val.email === payload.email && val.password === payload.password);
        let check = isAvailable ? "valid" : "invalid";
        console.log(check);
        return isAvailable;
    },
    userRegister: async (payload) => {
        let { data } = await axios.post("http://localhost:3001/user", payload);
        return data;
        // console.log(data);
    },
    getNotes: async (userId) => {  // Accept userId as parameter
        let { data } = await axios.get(`http://localhost:3001/notes?userId=${userId}`);
        return data;
    },
    addNotes: async (userId, payload) => {  // Accept userId as parameter
        let notePayload = { ...payload, userId: String(userId) };
        let { data } = await axios.post("http://localhost:3001/notes", notePayload);
        return data;
    },
    deleteNote: async (id) => {
        await axios.delete(`http://localhost:3001/notes/${id}`);
    },
    updateNote: async (id, updatedData) => {
        let { data } = await axios.patch(`http://localhost:3001/notes/${id}`, updatedData);
        return data;
    }

}