/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'; 
 import { View, Text, StyleSheet,ScrollView, Button } from 'react-native'; 
 import { NavigationContainer } from '@react-navigation/native'; 
 import { createStackNavigator } from '@react-navigation/stack'; 
 
 const HomeScreen = ({ navigation }) => { 
   return ( 
       <View style={styles.homeScreen}> 
           <Text>HomeScreen</Text> 
           <Button title="Go to Details" onPress={() => navigation.navigate('Market')} />
      </View> 
     ) 
 } 

 function DetailsScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20}}>
        <View></View>
        <View>
          {new Array(5).fill(1).map((el,index)=>(
          <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
            <View>
              <View style={{ width:160, height: 160, backgroundColor:"#bdbdbd"}}></View>
              <View style={{ marginTop:10, marginBottom: 10}}>
                <Text style={{ fontWeight: "700"}}>메종마르지엘라</Text>
                <Text style={{ marginTop:5, marginBottom: 5}}>마르지엘라 넘버로고 티셔츠</Text>
                <Text style={{ fontWeight: "700"}}>120,000원</Text>
              </View>
            </View>
            <View>
              <View style={{ width:160, height: 160, backgroundColor:"#bdbdbd"}}></View>
              <View style={{ marginTop:10, marginBottom: 10}}>
                <Text style={{ fontWeight: "700"}}>메종마르지엘라</Text>
                <Text style={{ marginTop:5, marginBottom: 5}}>마르지엘라 넘버로고 티셔츠</Text>
                <Text style={{ fontWeight: "700"}}>120,000원</Text>
              </View>
            </View>
          </View>
          ))}
        </View>
        
      </View>
    </ScrollView>
  );
}


 // 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
 const Stack = createStackNavigator(); 
 
 const App = () => { 
   return ( 
       //네비게이션의 트리를 관리해주는 컴포넌트 
         <NavigationContainer>      
           {/* 네비게이션 기본틀의 스택을 생성 */} 
             <Stack.Navigator> 
               {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
                 <Stack.Screen name="Home" component={HomeScreen}/> 
                 <Stack.Screen name="Market" component={DetailsScreen} />
             </Stack.Navigator> 
         </NavigationContainer> 
     ) 
 } 
 
 const styles = StyleSheet.create({ 
   homeScreen: { 
       flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center' 
     } 
 }) 
 export default App;
