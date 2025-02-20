export const BUTTON_STYLES = {
  base: 'w-full shadow-md rounded-xl flex gap-2 items-center justify-center transition-all duration-200',
  
  sizes: {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2',
    lg: 'px-6 py-3 text-lg'
  },
  
  variants: {
    default: {
      enabled: 'bg-blue-500 text-white hover:opacity-90 cursor-pointer',
      disabled: 'bg-blue-500 text-white opacity-50 cursor-not-allowed'
    },
    destructive: {
      enabled: 'bg-red-100 text-red-600 hover:bg-red-200 font-semibold border border-red-600 cursor-pointer',
      disabled: 'bg-red-100 text-red-600 font-semibold border border-red-600 opacity-50 cursor-not-allowed'
    },
    outline: {
      enabled: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer',
      disabled: 'bg-transparent border border-gray-300 text-gray-400 cursor-not-allowed'
    },
    ghost: {
      enabled: 'bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer',
      disabled: 'bg-transparent text-gray-400 cursor-not-allowed'
    }
  },
  
  iconSizes: {
    sm: '16',
    md: '20',
    lg: '24'
  }
} as const;