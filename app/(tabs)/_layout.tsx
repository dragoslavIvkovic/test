import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
 
 

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  

  return (
    <Tabs
      screenOptions={{
        
        
        
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
         
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
        }}
      />
        <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Three',
          tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Tab Four',
          tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
        }}
      />
       <Tabs.Screen
        name="five"
        options={{
          title: 'Tab Five',
          tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
        }}
      />
     </Tabs>
  );
}
