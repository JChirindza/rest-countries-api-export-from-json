import React, { Fragment } from "react";
import { Detector } from "react-detect-offline";

const NetDetector = () => (
    <>
        <Detector
            render={({ online }) =>
                online ? (
                    <div className="snackbar">
                        <i className="fas fa-wifi" id="wifiIconOn"></i>
                        <label htmlFor="">
                            Your internet connection was restored.
                        </label>
                        <button className="close-snackbar">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                ) : (
                    <div className="snackbar">
                        <i className="fas fa-wifi-slash" id="wifiIconOff"></i>
                        <label htmlFor="">You are currently offline....</label>
                        <button className="close-snackbar">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                )
            }
        />
    </>
);

export default NetDetector;
