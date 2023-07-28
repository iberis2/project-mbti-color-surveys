import styles from './Button.module.css'

function Button({ className = '', ...props }) {
  const classNames = `${styles.button} ${className}`
  return <button className={classNames} {...props} />
}

export default Button
