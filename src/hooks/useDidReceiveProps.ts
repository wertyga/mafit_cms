import { useRef, useEffect, useCallback } from 'react';

const useDidReceiveProps = (
  callback: () => void,
  dependency: string[],
) => {
  const dependencyRef = useRef(dependency);

  const memoizedCallback = useCallback(() => callback(), dependency);

  useEffect(() => {
    const isChanged = dependency.find(
      (dep) => !dependencyRef.current.includes(dep),
    );
    if (!isChanged) return;

    dependencyRef.current = dependency;
    memoizedCallback();
  }, dependency);
};

export default useDidReceiveProps;
