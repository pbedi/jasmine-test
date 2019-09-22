const customMatchers = {
  toBeCalculator: () => {
    return {
      compare: actual => {
        const result = {
          pass: actual instanceof Calculator,
          message: ''
        };

        if (result.pass) {
          'Expected ' + actual + ' not to be instance of Calculator';
        } else {
          result.message =
            'Expected ' + actual + ' to be instance of Calculator';
        }
        return result;
      }
    };
  }
};
