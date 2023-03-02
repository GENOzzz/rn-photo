import { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CountTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const reducer = (state, action) => {
  switch (action.type) {
    case CountTypes.INCREMENT:
      return state + 1;
    case CountTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const initState = 0;

const ReducerTest = () => {
  const [result, dispatch] = useReducer(reducer, initState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result}</Text>

      <Button
        title="+"
        onPress={() => dispatch({ type: CountTypes.INCREMENT })}
      ></Button>
      <Button
        title="-"
        onPress={() => dispatch({ type: CountTypes.DECREMENT })}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
  },
});

export default ReducerTest;
