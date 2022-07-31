import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function Search() {
  const [IsClosed, SetIsClosed] = useState(false);
  const [Data, SetData] = useState("");
  const navigate = useNavigate();
  const HandleInput = function (text) {
    SetData(text);
    console.log(text);
  };
  return (
    <>
      {/* <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder=""
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper> */}
      <div className="Search-Container">
        <FontAwesomeIcon
          onClick={() => {
            SetIsClosed(!IsClosed);
          }}
          icon={faSearch}
        />
        {IsClosed && (
          <input
            value={Data}
            onChange={(e) => {
              HandleInput(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.which == 13) {
                if (Data.trim() != "") {
                  SetIsClosed(false);
                  // Data..replace(/ /g, '');
                  navigate(`/Search?query=${Data}`);
                }
              }
            }}
            className="Input-Search"
            type="text"
          />
        )}
      </div>
    </>
  );
}

export default Search;
