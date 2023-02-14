import React, { ButtonHTMLAttributes } from "react"

export const Button = ({ classNames, children, ...params }: IButton) => {
    let styles = "rounded-lg bg-indigo-600 px-3 py-2 text-slate-50 shadow-xl"
    if (classNames && classNames.length > 0) styles = `${styles} ${classNames}`
    return <button className={styles} {...params}>{children}</button>
}

interface IButton extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    classNames?: string
}