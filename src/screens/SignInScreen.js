import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input, {
  InputTypes,
  keyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import { AuthRoutes } from '../navigations/routes';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input inputType={InputTypes.EMAIL} returnKeyType={ReturnKeyTypes.NEXT} />
      <Input
        inputType={InputTypes.PASSWRD}
        returnKeyType={ReturnKeyTypes.DONE}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
