import { Button, Text, View } from "react-native";

export default function Index() {


  const handlegoogleSignIn = async () => {
    try {

    } catch (error) {
      
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Google Signin</Text>
      <Button title="Sign in with Google" onPress={() => {handlegoogleSignIn()}} />
    </View>
  );
}
