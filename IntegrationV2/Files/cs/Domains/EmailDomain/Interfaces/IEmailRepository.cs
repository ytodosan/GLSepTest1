namespace Terrasoft.EmailDomain.Interfaces
{
	using EmailContract.DTO;
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core.Entities;
	using Terrasoft.EmailDomain.Model;

	#region Interface: IEmailRepository

	/// <summary>
	/// Email model repository interface.
	/// </summary>
	internal interface IEmailRepository
	{

		#region Methods: Internal

		/// <summary>
		/// Saves <paramref name="email"/> to storage.
		/// </summary>
		/// <param name="email"><see cref="EmailModel"/> instnace.</param>
		/// <param name="mailboxId">Mailbox identifier.</param>
		/// <param name="syncSessionId">Synchronization session identifier.</param>
		void Save(EmailModel email, Guid mailboxId = default, string syncSessionId = null);

		/// <summary>
		/// Collect EmailMessageData for <paramref name="email"/>.
		/// </summary>
		/// <param name="email"><see cref="EmailModel"/> instance.</param>
		/// <param name="mailboxId">Mailbox identifier.</param>
		/// <param name="syncSessionId">Synchronization session identifier.</param>
		/// <returns>Instance <see cref="Entity"/> of EmailMessageData.</returns>
		Entity GetEmailMessageData(EmailModel email, Guid mailboxId = default, string syncSessionId = null);

		/// <summary>
		/// Returns email message headers for <paramref name="messageId"/>.
		/// </summary>
		/// <param name="messageId">Message header identifier.</param>
		/// <returns>Email message headers collection.</returns>
		IEnumerable<EmailModelHeader> GetHeaders(string messageId);

		/// <summary>
		/// Gets <see cref="Email"/> by <paramref name="activityId"/>.
		/// </summary>
		/// <param name="activityId">Activity identifier.</param>
		/// <returns>Email message</returns>
		Email CreateEmail(Guid activityId);

		/// <summary>
		/// Checks, that <paramref name="activityId"/> activity is email.
		/// </summary>
		/// <param name="activityId">Activity unique identifier.</param>
		/// <returns><c>True</c>, if activity <paramref name="activityId"/> is email, otherwise <c>false</c>.</returns>
		bool CheckIsEmail(Guid activityId);

		#endregion

	}

	#endregion

}
