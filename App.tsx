import { GluestackUIProvider,Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import "./global.css";
import { View, Text } from 'react-native';

export default function App() {
  return (
    // <GluestackUIProvider config={config}>
    //   <Box justifyContent="center" alignItems="center" flex={1} >
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </Box>
    // </GluestackUIProvider>

    <View className='bg-red-500 flex-1 items-center justify-center'>
      <Text>jkjfbvfdkjv</Text>
    </View>
  );
}