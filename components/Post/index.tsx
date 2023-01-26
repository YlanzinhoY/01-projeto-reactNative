import { Text, View, Image} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from "./style";
import { iconStyle } from "./iconStyle";

export function Post() {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerProfile}>
                    <Image source={require('../../assets/avatar.jpeg')}
                        style={styles.narutoImg}
                    ></Image>
                    <View>
                        <Text style={styles.nome}>Enzo Lanzellotti</Text>
                        <Text style={styles.nome}>@lanzinho_</Text>
                    </View>
                    <Icon style={iconStyle.caretdown} name="caretdown" color="#fff" size={12}></Icon>
                </View>
                <View>
                    <Text style={styles.postagem}>Primeira tela feita com React Native!😍😍</Text>
                    <Text style={styles.data}>20:30 PM - 01/25/2023 - <Text style={styles.deviceWrite}>Twitter for Android Studio</Text></Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.colorDetails}>0 <Text style={styles.bold}>Retweets</Text> 0 Quote <Text style={styles.bold}>Tweets</Text> 0 <Text style={styles.bold}>Likes</Text></Text>
                    <View style={styles.hr}></View>
                    <View style={styles.iconsAlign}>
                        <Ionicons name="chatbubble-sharp" 
                        color="white" size={30}></Ionicons>
                        <Ionicons name="repeat-sharp" color="white" size={30}></Ionicons>
                        <Ionicons name="heart" color="white" size={30}></Ionicons> 
                        <Ionicons name="md-share-outline" color="white" size={30}></Ionicons>
                    </View>
                </View>
            </View>
        </View>
    )
}