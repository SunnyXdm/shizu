import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

// Array of Breaking Bad characters with potential last messages
const characters = [
  {
    title: 'Saul Goodman',
    image:
      'https://i.pinimg.com/control/564x/32/40/7d/32407de90629f4642525df1a858502bd.jpg',
    messages: {
      Walter: 'Better call Saul!',
      Jesse: 'Yo Saul, I need your help again!',
    },
  },
  {
    title: 'Hank Schrader',
    image:
      'https://i.pinimg.com/control/564x/e8/c5/0f/e8c50fcb80c70c67eafefe0a446ed03f.jpg',
    messages: {
      Walter: 'Hank, stay out of my territory.',
      Jesse: 'Yo Hank, you still on my back?',
    },
  },
  {
    title: 'Gus Fring',
    image:
      'https://i.pinimg.com/control/564x/bd/39/01/bd3901781a3e79e333c6ace4d0a51b4d.jpg',
    messages: {
      Walter: 'I’m in charge now, Gus.',
      Jesse: 'Gus, don’t try to mess with me.',
    },
  },
  {
    title: 'Mike Ehrmantraut',
    image:
      'https://i.pinimg.com/control/564x/53/db/20/53db20db9032a2617c9c80a61458e14c.jpg',
    messages: {
      Walter: 'Mike, you are always so professional.',
      Jesse: 'Mike, I need you to teach me.',
    },
  },
  {
    title: 'Skyler White',
    image:
      'https://i.pinimg.com/736x/28/43/c3/2843c3a4bc654aa99170cdda263e50c4.jpg',
    messages: {
      Walter: "Skyler, it's all for the family.",
      Jesse: 'Yo Mrs. White, I’m looking out for him.',
    },
  },
  {
    title: 'Todd Alquist',
    image:
      'https://i.pinimg.com/736x/27/3d/32/273d326c7bdcd769dbcb710f59f3217a.jpg',
    messages: {
      Walter: 'Todd, you need to learn discipline.',
      Jesse: 'Todd, stay away from me.',
    },
  },
  {
    title: 'Lydia Rodarte-Quayle',
    image:
      'https://i.pinimg.com/736x/70/b3/07/70b307cba63d4b21d71ae3d9145195f3.jpg',
    messages: {
      Walter: 'Lydia, I need more methylamine.',
      Jesse: 'Lydia, I know what you did.',
    },
  },
  {
    title: 'Marie Schrader',
    image:
      'https://i.pinimg.com/564x/9c/c2/bb/9cc2bbb746d184d89d71c5a2dde51763.jpg',
    messages: {
      Walter: 'Marie, you need to stay out of this.',
      Jesse: "Sorry Marie, but I can't help.",
    },
  },
  {
    title: 'Hector Salamanca',
    image:
      'https://i.pinimg.com/564x/78/ef/32/78ef32a5fbdc58513925e20ec8043dd8.jpg',
    messages: {
      Walter: 'Ring the bell, Hector.',
      Jesse: 'I know what you did, Hector.',
    },
  },
  {
    title: 'Jane Margolis',
    image:
      'https://i.pinimg.com/control/564x/b7/46/69/b7466988ede2a919bc1ad900b6af0e34.jpg',
    messages: {
      Walter: 'I’m sorry about Jane.',
      Jesse: 'I wish I could bring you back, Jane.',
    },
  },
  {
    title: 'Tuco Salamanca',
    image:
      'https://i.pinimg.com/736x/1c/50/e0/1c50e0feb3019f317bddc12940372370.jpg',
    messages: {
      Walter: 'Tuco, calm down.',
      Jesse: 'Yo Tuco, chill out!',
    },
  },
  {
    title: 'Lalo Salamanca',
    image:
      'https://i.pinimg.com/564x/d1/e3/e3/d1e3e3a40a12caad1c737ff2b8252a19.jpg',
    messages: {
      Walter: "Lalo, I know you're watching me.",
      Jesse: 'Yo Lalo, stay out of my way.',
    },
  },
  {
    title: 'Walter White Jr.',
    image:
      'https://i.pinimg.com/564x/20/92/90/209290910b18648cb22b07b081a076f7.jpg',
    messages: {
      Walter: 'I did it all for you, son.',
      Jesse: 'Hey kid, keep your head up.',
    },
  },
];

// Function to get random user data based on sender (Jesse or Walter)
function getRandomChat(sender: any) {
  // Validate the sender input
  if (!['Walter', 'Jesse'].includes(sender)) {
    throw new Error("Sender must be either 'Walter' or 'Jesse'");
  }

  // Get a random character from the array
  const randomCharacter: any =
    characters[Math.floor(Math.random() * characters.length)];

  // Get the message from the selected character's messages based on the sender
  const randomMessage = randomCharacter?.messages?.[sender];

  // Return an object containing the name and the last message
  return {
    name: randomCharacter.name,
    lastMessage: randomMessage,
  };
}

// Example usage
console.log(getRandomChat('Walter'));
console.log(getRandomChat('Jesse'));

const ChatListItem = (props: any) => {
  console.log('props', JSON.stringify(props, null, 2));
  const chat = characters[props.index];
  const [pressed, setPressed] = React.useState(false);
  const openChat = () => {
    // console.log('Open chat', chat);
    props.navigation.navigate('chat');
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        // backgroundColor: 'red',
        backgroundColor: pressed ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
      }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={openChat}>
      <View
        style={{
          backgroundColor: 'blue',
          height: '100%',
          aspectRatio: 1,
          borderRadius: 100,
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 100,
          }}
          src={chat.image}
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          height: '100%',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {chat?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.5)',
          }}>
          {chat?.messages?.['Walter']}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
