import { stringifyCookie } from "next/dist/compiled/@edge-runtime/cookies"
import style from "./footer.module.css"

export default function Footer() {

    return (

        <footer className={style.footer}>
        <div class="end">

            <div className={style.titleFooter}>
                <h2>+Kotitas Tu Amigo Fiel</h2>
            </div>

            <div className={style.descripcionFooter}>
                <div className={style.footerDate}>Bs.Villa Crespo.Araoz 179.</div>
                <div className={style.footerDate}>
                    Numero De
                    Tel: 45855-8287
                    Celular: +54 11 2514-6260.
                </div>
            </div>

        </div>
    </footer>

    )

}