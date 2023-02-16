import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input, {
  InputTypes,
  keyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { AuthRoutes } from '../navigations/routes';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeInputView>
      <View style={[styles.container, { padding: top }]}>
        <Text>Sign In</Text>
        <Input
          styles={InputStyles}
          value={email}
          onChangeText={(text) => {
            setEmail(text.trim());
          }}
          inputType={InputTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
        />
        <Input
          styles={InputStyles}
          value={password}
          onChangeText={(text) => {
            setPassword(text.trim());
          }}
          inputType={InputTypes.PASSWRD}
          returnKeyType={ReturnKeyTypes.DONE}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const InputStyles = StyleSheet.create({
  container: { marginBottom: 20, paddingHorizontal: 20 },
  input: { borderWidth: 1 },
});

export default SignInScreen;
