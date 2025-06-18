import React from 'react';
import { Text } from 'react-native';
import { GripButton } from './src/Component/GripButton'; // Correct the path if needed

const GripButtonExamples = () => {
    const handlePress = (msg: string) => console.log(msg);
    return (
        <GripButton
            title="Demo"
            variant="solid"
            colorType="info"
            icon={<Text>💳</Text>}
            animationType="punch"
            titleCase="capitalize"
            shape="rounded"
            onPress={() => handlePress('Solid Info')}
        />
    );
};
export default GripButtonExamples;
