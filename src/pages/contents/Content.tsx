import "./Content.css";

export const Content = () => {
  return (
    <section className="content">
      <div className="content_left">
        <p className="content_title">What’s different about Manage?</p>
        <p className="content_title_text ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="content_right">
        <div className="content_paragraph_div">
          <div className="contetn_paragraph_number_title">
            <p className="content_paragraph_number">01</p>
            <p className="content_paragraph_text_title">
              Track company-wide progress
            </p>
          </div>
          <div className="content_paragraph_text_div">
            <p className="content_paragraph_text">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        <div className="content_paragraph_div">
          <div className="contetn_paragraph_number_title">
            <p className="content_paragraph_number">02</p>
            <p className="content_paragraph_text_title">
              Advanced built-in reports
            </p>
          </div>
          <div className="content_paragraph_text_div">
            <p className="content_paragraph_text">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        <div className="content_paragraph_div">
          <div className="contetn_paragraph_number_title">
            <p className="content_paragraph_number">03</p>
            <p className="content_paragraph_text_title">
              Everything you need in one place
            </p>
          </div>
          <div className="content_paragraph_text_div">
            <p className="content_paragraph_text">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
