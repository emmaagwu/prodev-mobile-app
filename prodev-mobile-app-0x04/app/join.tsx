import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top nav group */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* Titles */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>Enter your details to sign up.</Text>
        </View>

        {/* Form fields */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formControl}
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <View>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Primary button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social sign-up buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.secondaryButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom link */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
