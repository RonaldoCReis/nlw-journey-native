import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator className="flex-1 bg-slate-950 items-center justify-center text-lime-300" />
  );
};

export default Loading;
