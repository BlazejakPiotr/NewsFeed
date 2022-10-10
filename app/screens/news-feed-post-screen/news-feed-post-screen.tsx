import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {Header} from '../../components/header/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

type NewsFeedPostType = {
  title: {
    value: string;
    error?: string | null;
  };
  desc: {
    value: string;
    error?: string | null;
  };
};

export const NewsFeedPostScreen = () => {
  const navigation = useNavigation<any>();

  const [form, setForm] = useState<NewsFeedPostType>({
    title: {
      value: '',
    },
    desc: {
      value: '',
    },
  });

  const validateInputs = () => {
    if (form.title.value.trim() === '') {
      setForm({
        ...form,
        title: {value: '', error: 'To pole nie moze być puste'},
      });
      return false;
    } else if (form.desc.value.trim() === '') {
      setForm({
        ...form,
        desc: {value: '', error: 'To pole nie moze być puste'},
      });
      return false;
    } else {
      setForm({
        title: {value: form.title.value, error: null},
        desc: {value: form.desc.value, error: null},
      });
      return form;
    }
  };

  const handleCreatePost = () => {
    Keyboard.dismiss();

    if (validateInputs()) {
      let data = {
        _id: String(new Date()),
        isLiked: false,
        author: {
          name: 'user',
          avatar: 'https://picsum.photos/50?random=00',
        },
        title: form.title.value,
        description: form.desc.value,
        created_At: String(new Date()),
        images: [],
      };
      setForm({title: {value: ''}, desc: {value: ''}});
      setTimeout(() => navigation.navigate('Newsfeed', {data}), 1000);
    }
  };

  return (
    <>
      <Header text="Nowy post" goBack action={handleCreatePost} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            overScrollMode="always"
            showsVerticalScrollIndicator={true}
            contentInsetAdjustmentBehavior="always">
            <View style={styles.input}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#28235F',
                    marginRight: 10,
                    fontSize: 12,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  Dodaj tytuł:
                </Text>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Dodaj tytuł"
                  onChangeText={text =>
                    setForm({...form, title: {value: text}})
                  }
                  defaultValue={form.title.value}
                />
              </View>
              {!!form.title.error && (
                <Text style={styles.error}>{form.title.error}</Text>
              )}
            </View>
            <View style={styles.input}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'https://picsum.photos/50',
                  }}
                />
                <TextInput
                  style={{flex: 10}}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={text => setForm({...form, desc: {value: text}})}
                  defaultValue={form.desc.value}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  placeholder="Napisz coś"
                />
              </View>
              {!!form.desc.error && (
                <Text style={styles.error}>{form.desc.error}</Text>
              )}
            </View>
            <View
              style={{
                paddingHorizontal: 23,
                marginVertical: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="image-plus" size={24} color={'#28235F'} />
              <Text
                style={{
                  color: '#28235F',
                  marginLeft: 10,
                  fontSize: 12,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Dodaj zdjęcie
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  input: {
    borderBottomColor: '#bebebe99',
    borderBottomWidth: 1,
    paddingHorizontal: 23,
  },
  avatar: {
    flex: 2,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 3,
    marginRight: 10,
  },
  error: {
    fontFamily: 'Montserrat-Medium',
    color: 'red',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
});
