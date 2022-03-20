import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import CarStyles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faLock, faKey, faUnlock } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../MenuItem/index';

function CarItem() {
    const [locked, setLock] = useState(true)

    const clickButton = () => {
        if (locked) {
            setLock(false);
        }
        else {
            setLock(true);
        }
    }
    return (
        <View style={CarStyles.carContainer}>
            <ImageBackground
                style={CarStyles.imageBackground}
                source={require("../../assets/background.png")}
            />
            {/* Header */}
            <View style={CarStyles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={CarStyles.icon} icon={faCog} size={24} />
                </TouchableOpacity>

                <Text style={CarStyles.headertitle}>NaziMobile</Text>

                <TouchableOpacity>
                    <FontAwesomeIcon style={CarStyles.icon} icon={faToolbox} size={24} />
                </TouchableOpacity>

            </View>

            {/* Battery Section */}
            <View style={CarStyles.batterysection}>
                <Image
                    style={CarStyles.batteryimage}
                    source={require("../../assets/battery.png")}
                >
                </Image>

                <Text style={CarStyles.batterytext}> 150 Mi</Text>

            </View>

            {/* Status Section */}
            <View style={CarStyles.status}>
                <Text style={CarStyles.statusText}>Parked</Text>
            </View>

            {/* Control Section */}
            <ScrollView>
            <View style={CarStyles.control}>
                <TouchableOpacity>
                    <View style={CarStyles.controlButton}>
                        <FontAwesomeIcon style={CarStyles.icon} icon={faFan} size={24} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={CarStyles.controlButton}>
                        <FontAwesomeIcon style={CarStyles.icon} icon={faKey} size={24} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={clickButton}>
                    <View style={CarStyles.controlButton}>
                        <FontAwesomeIcon style={CarStyles.icon} icon={locked ? faLock : faUnlock} size={24} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Menu Bar */}
            <MenuItem/>

            </ScrollView>
        </View>
    );
}

export default CarItem;
