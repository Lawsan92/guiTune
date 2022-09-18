import { View, Text, StyleSheet, Platform } from "react-native";

const Note = ({note}) => {
    return (
      <View style={style.note}>
        <Text style={style.name}>{note.name}</Text>
        <Text style={style.octave}>{note.octave}</Text>
        <Text style={style.sharp}>{note.frequency}</Text>
      </View>
    );
}

const style = StyleSheet.create({
  note: {
    width: 110,
    height: 146,
    marginBottom: 10,
  },
  name: {
    fontSize: 128,
    fontWeight: "600",
    color: "skyblue",
    flexDirection: "row",
  },
  sharp: {
    fontSize: 32,
    color: "skyblue",
    position: "absolute",
    right: 0,
    top: 32,
    ...Platform.select({
      ios: {
        top: 10,
        fontSize: 48,
      },
    }),
  },
  octave: {
    fontSize: 32,
    color: "skyblue",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default Note;