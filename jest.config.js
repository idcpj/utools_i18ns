const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // 指向 Next.js 应用的路径
  dir: './'
})

// Jest 自定义配置
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // 处理模块别名
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/(.*)$': '<rootDir>/src/$1'

  }
}

module.exports = createJestConfig(customJestConfig)