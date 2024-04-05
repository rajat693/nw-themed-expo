import {
  GluestackUIProvider as ThemedProvider,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import "./global.css";
import { SafeAreaView } from "react-native";
import { GluestackUIProvider as NativewindProvider } from "./components/ui/gluestack-ui-provider";
import { Link as NWLink, LinkText as NWLinkText } from "./components/ui";

export default function App() {
  return (
    <>
      <ThemedProvider config={config}>
        <SafeAreaView style={{ flex: 1 }}>
          <Link href="https://gluestack.io/" isExternal>
            <LinkText>gluestack</LinkText>
          </Link>
        </SafeAreaView>
      </ThemedProvider>

      <NativewindProvider>
        <SafeAreaView style={{ flex: 1, gap: 30 }}>
          <NWLink href="https://gluestack.io/" isExternal>
            <NWLinkText>gluestack</NWLinkText>
          </NWLink>
        </SafeAreaView>
      </NativewindProvider>
    </>
  );
}
