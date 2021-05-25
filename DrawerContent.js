import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Title, Paragraph, Drawer,
    Text, TouchableRipple, Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailScreen from './DetailScreen';

export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Title style={styles.title}> Welcome User</Title>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            Icon={() => (
                                <Icon
                                    name="home-outline"
                                    color={black}
                                    size={20}
                                />
                            )}
                            label="Home"
                            omPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            Icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            omPress={() => { props.navigation.navigate('Details') }}
                        />
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    Icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    omPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    drawerSection: {
        marginTop: 15,
    }


})

