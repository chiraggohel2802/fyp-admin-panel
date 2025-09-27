export const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
export const phoneRegExp =
  /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export function getErrors() {
  const ERRORS = {
    REQUIRED: 'required',
    EMAIL: 'Invalid Email',
    PHONE: 'Phone number is not valid',

    AUTH: {
      EMAIL_NOT_FOUND: 'Email not found',
      SHORT_PASSWORD: 'Your password is too short.',
      WEEK_PASSWORD: 'Please create a stronger password',
      MISMATCH_PASSWORD: 'Passwords must match',
    },

    FIRST_TEN_PRICE: {
      NUMBER: 'first ten price must be a number',
    },
    SECOND_TEN_PRICE: {
      NUMBER: 'second ten price must be a number',
    },
    THIRD_TEN_PRICE: {
      NUMBER: 'third ten price must be a number',
    },
    ADDITIONAL_TEN_PRICE: {
      NUMBER: 'additional ten price must be a number',
    },

    FARE_PRICING: {
      BASE_FARE: {
        NUMBER: 'base fare must be a number',
      },
      MINIMUM_DURATION: {
        NUMBER: 'minimum duration must be a number',
      },
      PRICE_PER_KM: {
        NUMBER: 'price per km must be a number',
      },
      CANCELLATION_FEE: {
        NUMBER: 'cancellation fee must be a number',
      },
      PICKUP_CANCELLATION_FEE: {
        NUMBER: 'pickup cancellation fee must be a number',
      },
      WAITING_CHARGE: {
        NUMBER: 'waiting charge must be a number',
      },
      FIXED_PRICE: {
        NUMBER: 'fixed price must be a number',
      },
    },
    SURCHARGE: {
      SURCHARGE_VALUE: {
        NUMBER: 'surcharge must be a number',
      },
      PERCENTAGE: {
        NUMBER: 'percentage must be a number',
      },
    },
    DRIVERS: {
      SALARY: {
        NUMBER: 'salary should bigger than 0',
      },
      AMOUNTPERHOUR: {
        NUMBER: 'amount per hour should bigger than 0',
      },
      OVERTIMEAMOUNTPERHOUR: {
        NUMBER: 'over time amount per hour should bigger than 0',
      },
      MOBILE: {
        NUMBER: 'Phone number is not valid',
      },
    },
  };
  return { ERRORS };
}
