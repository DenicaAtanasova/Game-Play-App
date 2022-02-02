export default function ErrorPage({children}){
    return(
        <section id="catalog-page">
            <h1>Page Not Found</h1>
            {children && <h3 className="no-article">{children}</h3>}
        </section>
    );
};