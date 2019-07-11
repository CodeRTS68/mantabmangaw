import {combineReducers} from 'redux';

const songsReducer = ()=> {
    return [
        {title: 'aku', duration:'4:05'},
        {title: 'kau', duration:'3:05'},
        {title: 'dan', duration:'1:05'},
        {title: 'dia', duration:'2:05'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
});