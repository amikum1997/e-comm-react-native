import { Dimensions } from 'react-native';

export const theme = {
    screen: {
        windowWidth: Dimensions.get('window').width,
        windowHeight: Dimensions.get('window').height,
        margin360 : 20,
        padding360 : 10
    },
    color: {
        dark : {
            primaryColor: '#8C62E3',
            secondaryColor: '#181927',
            supportPrimaryColor: '#E2DAF5',
            supportSecondaryColor: '#727176'
        },
        light : {
            primaryColor: '#8C62E3',
            secondaryColor: '#181927',
            supportPrimaryColor: '#E2DAF5',
            supportSecondaryColor: '#727176'
        }
    },
    
    fontSize: {
        largeTitle: 34,
        regularTitle28: 28,
        regularTitle22: 22,
        regularTitle20: 20,
        titleCaption: 17,
        body: 16,
        footnote: 13,
        caption: 12
    },
    fontFamily: {
        blackFont: 'Poppins_900Black',
        extraBoldFont: 'Poppins_800ExtraBold',
        boldFont: 'Poppins_700Bold',
        semiBold: 'Poppins_600SemiBold',
        mediumFont: 'Poppins_500Medium',
        reglarFont: 'Poppins_400Regular',
        lightFont: 'Poppins_300Light',
        thinFont: 'Poppins_200ExtraLight',
        extraThin: 'Poppins_100Thin'
    },
    padding : {
        p1 : 10,
        p2 : 20,
        p3 : 30,
        p4 : 40,
        p5 : 50,
        p6 : 60,
        p7 : 70,
        p8 : 80,
        p9 : 90,
        p10 : 100,
    },
    margin : {
        m1 : 10,
        m2 : 20,
        m3 : 30,
        m4 : 40,
        m5 : 50,
        m6 : 60,
        m7 : 70,
        m8 : 80,
        m9 : 90,
        m10 : 100,
    }
}