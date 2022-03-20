import React from 'react';
import { View, menu, Text, TouchableOpacity } from 'react-native';
import Styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faMusic } from '@fortawesome/free-solid-svg-icons';

function MenuItem() {
    return (

        <View style={Styles.menuItems}>
            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.menuRow}>
                    <FontAwesomeIcon style={Styles.icon} icon={faMusic} size={24} />

                    <Text style={Styles.menuText}> Media</Text>
                    <FontAwesomeIcon style={Styles.arrowIcon} icon={faChevronRight} size={24} />
                </View>
            </TouchableOpacity>
        </View>

    );
}

export default MenuItem;